class Post < ActiveRecord::Base
  validates :body, :title, presence: true
  validates :title, uniqueness: true
  validates :body, length: { minimum: 100 }

  has_many :comments
end
