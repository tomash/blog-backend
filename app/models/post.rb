class Post < ActiveRecord::Base
  validates :body, :title, :author, presence: true
  validates :title, uniqueness: true
  validates :body, length: { minimum: 20 }

  has_many :comments, dependent: :destroy
  belongs_to :author, class_name: User
end
