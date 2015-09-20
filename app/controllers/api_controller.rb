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
		
			},
			"leadership_training_woman": {
				"name": "Support Women's Leadership Training",
				"assertion": "Let women learn to lead.",
				"description": "The answer to growth and development lies in the equality of women engaging in society-reforming tasks and economical decision-making",
				"img": "http://www.hope-project.org/wp-content/uploads/2014/05/DSC_4459_Girls_Studying.jpg",
				"donate-url": "https://tinygive.com/campaigns/support-women-s-leadership-training-in-rwanda"
			},
			"actions_against_hunger": {
				"name": "Actions Against Hunger",
				"assertion": "Feed the starving. ",
				"description": "Help provide those starving access to clean water and nutritional security.",
				"img": "http://www.care.org/sites/default/files/image/TCD-2012-BB--3386.jpg",
				"donate-url": "https://my.actionagainsthunger.org/checkout/donation?eid=24902"
			},
			"nepal_earthquake": {
				"name": "Support The Nepal Earthquake Relief Fund",
				"assertion": "Get Nepal back on its feet.",
				"description": "Help support the funding to provide the displaced the resources to survive.",
				"img": "http://www.vogue.com/wp-content/uploads/2015/05/21/nepal-kathmandu-earthquake-2015.jpg",
				"donate-url": "https://tinygive.com/campaigns/support-the-nepal-earthquake-relief-fund"
			},
			"cupcake-girl": {
				"name": "Buy A Cupcake And Support The Girl's Education",
				"assertion": "Help provide girls education.",
				"description": "Buy a cupcake and donate so that low-income countries can create their first-generation graduates and global leaders."
				"img": "http://www.smorgasblurb.com/wp-content/uploads/2011/06/dscn08520886.jpg"
				"donate-url": "https://tinygive.com/campaigns/buy-a-cupcake-and-sponsor-girls-education"
			},
			"ebola-support": {
				"name": "Support Community Justice in Liberia",
				"assertion": "Donate to provide resources to stop conficts caused by the ebola outbreak.",
				"description": "Help provide those affected by the tensions between communites resulting from the ebola outbreak so that the communites can coexxist peacefully.",
				"img": "http://cdn.thedailybeast.com/content/dailybeast/articles/2014/10/28/are-mandatory-ebola-quarantines-legal/jcr:content/image.img.2000.jpg/1414498383227.cached.jpg"
				"donate-url": "https://tinygive.com/campaigns/support-the-work-of-community-justice-teams-in-monrovia-liberia"
			}
		}






	end
end
