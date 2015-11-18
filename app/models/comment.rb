class Comment < ActiveRecord::Base
  belongs_to :post

  validates :body, presence: true, length: { minimum: 10, maximum: 1000 }
end
