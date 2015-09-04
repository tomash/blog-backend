class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]

  respond_to :json

  def index
    @posts = Post.includes(:comments)
    respond_with @posts, include: ['comments']
  end

  def show
    respond_with @post, include: ['comments']
  end

  def new
    @post = Post.new
    respond_with @post
  end

  def edit
    respond_with @post
  end

  def create
    @post = Post.create(post_params)
    respond_with @post
  end

  def update
    @post.update(post_params)
    respond_with @post
  end

  def destroy
    @post.destroy
    respond_with @post
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def post_params
      params.require(:data).require(:attributes).permit(:title, :body)
    end
end
