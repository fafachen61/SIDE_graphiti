class Api::V1::ImagesController < ApplicationController
  def index
    image = Image.all.order(created_at: :desc)
    render json: image
  end

  def create
    image = Image.create!(image_params)
    if image
      render json: image
    else
      render json: image.errors
    end
  end

  def show
    if image
      render json: image
    else
      render json: image.errors
    end
  end

  def destroy
    image&.destroy
    render json: { message: 'Image deleted!' }
  end

  private

  def image_params
    params.permit(:uploader_name, :discription, :creator_name, :image, :category, :access_level)
  end

  def image
    @image ||= Image.find(params[:id])
  end
end
