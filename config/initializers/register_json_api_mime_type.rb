# this is needed for rails to properly determine :json content type
# based on `application/vnd.api+json` that ember-data is sending
#
# more description (and following snippet) found here:
# https://github.com/rails-api/active_model_serializers/issues/1027

api_mime_types = %W(
  application/vnd.api+json
  application/json
)

Mime::Type.unregister :json
Mime::Type.register 'application/json', :json, api_mime_types
