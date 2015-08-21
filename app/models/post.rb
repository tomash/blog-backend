class Post < ActiveRecord::Base
  validates_presence_of :body, :title

  validates :title, uniqueness: true
  validates :body, length: { minimum: 100 }
end
