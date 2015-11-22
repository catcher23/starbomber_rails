class Api::RecordsController < ApplicationController
	def create
		record = Record.new(
		
		name: params[:name],
		score: params[:score]
		)
		if record.name.blank?
			record.name = "Anonymous"
		end
		record.save

		render json: Record.all.order('score DESC')
	end

	def index
		@records = Record.all.order('score DESC').first(10)
		render json: @records
	end
end
