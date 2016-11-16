def search_index(games, search_term)
  games.find_index(search_term) || "Not Found"
end

games = ["Super Mario Bros.", "Contra", "Metroid", "Mega Man 2"]
puts search_index(games, "Contra")
