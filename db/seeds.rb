Post.destroy_all

10.times do |n|
  Post.create title: "Post title ##{n}", body: 'Lorem ipsum dolor sit amet. '*10
end
