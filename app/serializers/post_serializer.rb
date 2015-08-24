class PostSerializer < ActiveModel::Serializer
  embed :ids, embed_in_root: true

  attributes :id, :title, :body, :created_at, :updated_at

  has_many :comments
end
