class Candle
  # ==========================
  # # SET UP
  # ==========================
  # connect to heroku postgres
  if(ENV['DATABASE_URL'])
    uri = URI.parse(ENV['DATABASE_URL'])
    DB = PG.connect(uri.hostname, uri.port, nil, nil, uri.path[1..-1], uri.user, uri.password)
  # else connect to localhost postgres
  else
    DB = PG.connect(host: "localhost", port: 5432, dbname: 'candle-delight_development')
  end

  # ==========================
  # # ROUTES
  # ==========================
  # index
  def self.all
    results = DB.exec("SELECT * FROM candles;")
    return results.map do |result|
      {
        "id" => result["id"],
        "scent_1" => result["scent_1"],
        "scent_2" => result["scent_2"],
        "embellishment" => result["embellishment"],
        "color" => result["color"],
        "packaging" => result["packaging"]
      }
    end
  end

  # show
  def self.find(id)
    results = DB.exec("SELECT * FROM candles WHERE id=#{id};")
    return {
        "id" => results.first["id"],
        "scent_1" => results.first["scent_1"],
        "scent_2" => results.first["scent_2"],
        "embellishment" => results.first["embellishment"],
        "color" => results.first["color"],
        "packaging" => results.first["packaging"]
      }
  end

  # create
  def self.create(candle)
    results = DB.exec(
      <<-SQL
        INSERT INTO candles (scent_1, scent_2, embellishment, color, packaging)
        VALUES ('#{candle["scent_1"]}', '#{candle["scent_2"]}', '#{candle["embellishment"]}', '#{candle["color"]}', '#{candle["packaging"]}')
        RETURNING id, scent_1, scent_2, embellishment, color, packaging;
      SQL
    )
    return {
        "id" => results.first["id"],
        "scent_1" => results.first["scent_1"],
        "scent_2" => results.first["scent_2"],
        "embellishment" => results.first["embellishment"],
        "color" => results.first["color"],
        "packaging" => results.first["packaging"]
    }
  end

  # delete

  # update

end
