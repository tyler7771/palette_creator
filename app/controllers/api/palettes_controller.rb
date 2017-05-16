class Api::PalettesController < ApplicationController
  def index
    @palettes = Palette
    render :index
  end

  def show
    @palette = Palette.find(params[:id])
  end

  def create
    @palette = Palette.new(palette_params)
    @palette.user_id = current_user.id
    
    if @palette.save
      render :show
    else
      render :json => { :errors => @palette.errors.full_messages }, :status => 422
    end
  end

  def update
    @palette = Palette.find(params[:id])

    if @palette.update_attributes(palette_params)
      render :show
    else
      render :json => { :errors => @palette.errors.full_messages }, :status => 422
    end
  end

  def destroy
    @palette = Palette.find(params[:id])
    @palette.destroy
    render :json => @palette
  end

  private
  def palette_params
    params.require(:palette)
    .permit(:name,
      :main_color,
      :complementary_one,
      :complementary_two,
      :complementary_three,
      :complementary_four)
  end
end
