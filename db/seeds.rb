Post.destroy_all
Comment.destroy_all

count = ENV['count'].present? ? ENV['count'].to_i : 5

def lorem(count)
  'Lorem ipsum dolor sit amet. '*count
end

count.times do |n|
  post = Post.create! \
    title: FFaker::HipsterIpsum.sentence,
    body: FFaker::BaconIpsum.paragraphs(rand(2..8)).join(' '),
    created_at: n.hours.ago

  rand(0..6).times do |n|
    Comment.create! body: lorem(3), post: post
  end
end
