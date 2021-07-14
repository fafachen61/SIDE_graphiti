class CreateImages < ActiveRecord::Migration[5.2]
  def change
    create_table :images do |t|
      t.string :uploader_name, default: 'no uploader name'
      t.text :discription, default: 'no description'
      t.string :creator_name, default: 'creator name not provided'
      t.string :image
      t.text :category, default: 'default_category'
      t.string :access_level, default: 'everyone'

      t.timestamps
    end
  end
end
