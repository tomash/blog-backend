class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :edit, :update, :destroy]

  respond_to :json

  def index
    @comments = Comment.all

    respond_with @comments
  end

  def show
    respond_with @comment
  end

  def new
    @comment = Comment.new
    respond_with @comment
  end

  def edit
    respond_with @comment
  end

  def create
    @comment.create(comment_params)
    respond_with @comment
  end

  def update
    @comment.update(comment_params)
    respond_with @comment
  end

  def destroy
    @comment.destroy
    respond_with @comment
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def comment_params
      params.require(:comment).permit(:body, :post_id)
    end
end
