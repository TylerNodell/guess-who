require 'HTTParty'

p "Put the IP here"

ip = gets.chomp
ip = HTTParty.get(ip)
body = JSON.parse(ip.body)
body.to_S