## Development notes

* Use [nvm]
* Use Ember-Inspector if you get lost
* Ember-CLI uses both npm and bower, I assume this is because not all packages are in npm yet
* You should not touch `app/index.html`, everything you probably need to do can be done in other places instead.
* Backend and frontend runs on different ports, so we have 2 origins. You cannot just put `rack-cors` and be happy, because with CORS browser always sends preflight OPTION requests, which Rails does not handle by default. Just use `ember server` with `--proxy` option.
* `DS.RESTAdapter` (which is a base for `DS.ActiveModelAdapter`) sends json requests with `Content-Type` of `application/vnd.api+json`. I have made my backend recognize it as `:json` with following snippet in `ApplicationController`:

  ```ruby
  before_action :determine_format

  def determine_format
    if request.format == 'application/vnd.api+json'
      request.format = :json
    end
  end
  ```

  This can also be changed client-side, but i have choosen the easiest route ;)

* I removed `ember-cli-content-security-policy` from `package.json`, because it was causing some "Refused to load inline style" errors. This should probably be solved some other way for production app.

* Use [active_model_serializers] and [ActiveModelAdapter] for seamless Ember-Data integration (just remember to set `embed :ids, embed_in_root: true` in your serializers).

* Ember uses strong convention of mapping class names to paths. So `ApplicationAdapter` goes to `app/adapters/application.js`.

* You need to disable csrf token authentication and use some proper token authentication mechanism (i've just used http auth for now).

* There is really no point in using Ember controllers in 2.0. Just use components all the way down (components will be routable in future Ember version).

* Components are wrapped with `div` by default, but you can customize it with `tagName`.

* This is just a regular property, it can be `set()`, `get()` or passed in template:

  ```handlebars
  {{my-component tagName='span'}}
  ```

* Use `{{action 'actionName'}}` to define actions for DOM nodes.

* The default action is `click`, but you can overwrite it like this `{{action 'actionName' on='submit'}}`.

* Action can have parameters, like this `{{action 'destroy' post}}`. They will be passed as action handler arguments.

* Use `toggleProperty()` instead of manually updating booleans.

* There are components for form elements, like `{{input}}` and `{{textarea}}`.

* Validation plugins does not work with Ember 2.0, or I invested too little time to make them work. Certainly not out-of-the-box.

* Actions bubbles up through controllers, but does not bubble through components. They are meant to be isolated, and if you need to bubble some action up, you need to explicitely send a new one with `sendAction()`. This isolation is actually a great thing, compared to Angular and its way of solving this with a hand-made `stopPropagation` directive :).

* `store.createRecord()` is just making a new record. You need to call `save()` in order to push it to backend.

* There are `positionalParams` for components that lets you just pass params without explicitely naming them, but this does not work for me unfortunately.

* Form components works best when fed with models, not primitive values. This way they can use `model.errors` to show server-side errors. And they can pass the model up, when sending actions.

* Filtering is now provided by separate `ember-data-filter`.

* Rails errors are send in json consumable by `ActiveModelAdapter` yay! You can access them with `model.errors.attributeName`.

* `Ember.computed` is great. I use for everything, which makes my templates simple.

* Components should be concerned only with UI and handling/sending actions. `model.destroyRecord()` in component is a nono!

* Use bootstrap, it makes working with an app much pleasant than user agent styles :-). `ember-cli-bootstrap-sass` was not working for me in 2.0. I just installed `ember-cli-sass` via npm and `bootstrap-sass via bower, and then added path to sass files in `ember-cli-build.js`. Then it is only one `@import "bootstrap"` away.

* You can give class to components with `class` property of course ;)

* There are plugins for everything, like the `ember-moment` that provides `{{moment-from-now}}` component. That is great :)

* You need to filter out new records from listings, if you keep one all the time for pushing into the form component.

* `Ember.computed.filter` only watches array for new/removed elements. It **wil not** recompute if any of the elements changes. If this is what you need, use `Ember.computed.filterBy`.

* You cannot sort by date attribute with `Ember.computed.sortBy`, you need to use `sort`. But you can use `Ember.compare` to just compare times, instead of reinventing the wheel.

* You can set arbitrary properties on your models. This is good to keep local state. For example, you can set `comment.isEdited` to true, to indicate that given comment is edited atm, so form can show, destroy button can hide etc). Only properties defined in model definition will be pushed to backend when `save`d (in contrast to how Backbone sends all of them).

[nvm]: https://github.com/creationix/nvm
[active_model_serializers]: https://github.com/rails-api/active_model_serializers
[ActiveModelAdapter]: https://github.com/ember-data/active-model-adapter
