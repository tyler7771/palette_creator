class Api::PallettesController < ApplicationController
  def index
    @pallettes = Pallette
    render :index
  end

  def show
    @pallette = Pallette.find(params[:id])
  end

  def create
    @pallette = Pallette.new(pallette_params)
    if @pallette.save
      render :show
    else
      render :json => { :errors => @pallette.errors.full_messages }, :status => 422
    end
  end

  def update
    @pallette = Pallette.find(params[:id])

    if @pallette.update_attributes(pallette_params)
      render :show
    else
      render :json => { :errors => @pallette.errors.full_messages }, :status => 422
    end
  end

  def destroy
    @pallette = Pallette.find(params[:id])
    @pallette.destroy
    render :json => @pallette
  end

  private
  def pallette_params
    params.require(:pallette)
    .permit(:name,
      :dominate_color,
      :complementary_one,
      :complementary_two,)
      :complementary_three,)
      :complementary_four,)
      :complementary_five)
  end
end
