class ApiController < ApplicationController
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def causes
  	render json: {
			"child_with_book": {
				"name": "Name of cause",
				"assertion": "Do good things.",
				"description": "Pellentesque consectetur lectus eget consectetur commodo. In varius sollicitudin magna sit amet euismod.",
				"img": "http://harambeeusa.org/wp/wp-content/uploads/2010/05/Child_with_book.jpg",
				"donate-url": "https://google.com"
			}
		}

  end

end
