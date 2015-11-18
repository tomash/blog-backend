class CommentSerializer < ActiveModel::Serializer
  embed :ids, embed_in_root: true

  attributes :id, :body, :nickname, :created_at, :updated_at
end
