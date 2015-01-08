class Api::V1::GuitarsController < ApplicationController

  def index
    render json: Guitar.all
  end

  def create
    new_guitar = Guitar.create(guitar_params)
    render json: {guitar: new_guitar}
  end

  def update
    up_guitar = Guitar.find(params[:id])
    up_guitar[params[:node]] = params[:value]
    up_guitar.save
    render json: {status:200}
  end
  
  def destroy
    del_guitar = Guitar.find(params[:id])
    del_guitar.destroy
    render json: {status:200}
  end

  def guitar_params
      params.permit(:id, :name, :s1, :s2, :s3, :s4, :s5, :s6)
  end
end