class CommentSerializer < ActiveModel::Serializer
  embed :ids, embed_in_root: true

  attributes :id, :body
end
