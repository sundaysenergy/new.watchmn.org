require 'pp'
require 'koala'

          @oauth = Koala::Facebook::OAuth.new("301954979862828", "7cc761de50f6bde805baec2ff30372da", "http://www.cape.io")
          access = @oauth.get_app_access_token
          @graph = Koala::Facebook::API.new(access)
          timeline = @graph.get_connections('watchmn', "feed")
          profile = @graph.get_object('watchmn')
pp timeline
pp profile
