class CreatePallettes < ActiveRecord::Migration[5.0]
  def change
    create_table :pallettes do |t|
      t.string :name
      t.string :dominate_color, null:false
      t.string :complementary_one
      t.string :complementary_two
      t.string :complementary_three
      t.string :complementary_four
      t.string :complementary_five
      t.integer :user_id
      t.timestamps
    end
  end
end
