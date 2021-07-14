9.times do |i|
    Image.create(
      uploader_name: "uploader #{i + 1}",
      discription: "description #{i + 1}",
      creator_name: "creator #{i + 1}",
      #image: use default,
      category: "sci-fi, anime"
      access_level: 'normal'
    )
  end
