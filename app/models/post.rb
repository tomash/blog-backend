class Post < ActiveRecord::Base
  validates_presence_of :body, :title

  validates :title, uniqueness: true
end
