Post.destroy_all
Comment.destroy_all

def lorem(num)
  'Lorem ipsum dolor sit amet. '*num
end

5.times do |n|
  post = Post.create! \
    title: FFaker::HipsterIpsum.sentence,
    body: FFaker::BaconIpsum.paragraphs(rand(2..8)).join(' '),
    created_at: n.hours.ago

  rand(0..6).times do |n|
    Comment.create! body: lorem(3), post: post
  end
end
