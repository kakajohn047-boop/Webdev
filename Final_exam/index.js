let hannaFruits = [
  {
    fruit: "apple",
    color: "green",
    image: "images/apple.jpg",  
    descr: "An apple is a round, edible fruit produced by an apple tree (Malus domestica), a domesticated member of the rose family. Apples are known for their juicy, green or red fruit and are used in various forms, including fresh eating, baking, and making juice, cider, and other products."
  },
  {
    fruit: "pear",
    color: "green",
    image: "images/pear.jpg", 
    descr: "Pears are fruits produced and consumed around the world, growing on a tree and harvested in late summer into mid-autumn. The pear tree and shrub are a species of genus Pyrus, in the family Rosaceae, bearing the pome fruit of the same name."
  },
  {
    fruit: "mango",
    color: "red",
    image: "images/mango.jpg", 
    descr: "Mangoes are tropical stone fruits, part of the drupe family, known for their sweet, juicy flesh and are native to Southeast Asia. They are a good source of vitamins A and C, and are enjoyed worldwide."
  }
];

// ColorBlock class
class ColorBlock {
  constructor(color) {
    this.color = color;

    // Create div, set background color using jQuery
    this.element = $('<div></div>');
    this.element.css({
      'background-color': this.color,
      'width': '30px',
      'height': '30px',
      'display': 'inline-block',
      'margin': '5px',
      'cursor': 'pointer'
    });
    this.element.attr('data-color', this.color);

    // Append to colorPanel
    $('#colorPanel').append(this.element);
  }
}

// Fruit class
class Fruit {
  constructor(fruit, color, image, descr) {
    this.fruit = fruit;
    this.color = color;
    this.image = image;
    this.descr = descr;
  }

  render() {
    const block = $('<div></div>');
    block.css('margin-bottom', '10px');

    const name = $('<h3></h3>').text(this.fruit);
    const img = $('<img>').attr('src', this.image).css({ 'width': '80px', 'height': '80px' });
    const desc = $('<p></p>').text(this.descr);

    block.append(name, img, desc);
    return block;
  }
}

function generateColorBlocks() {
  const usedColors = [];
  hannaFruits.forEach(function(item) {
    if (!usedColors.includes(item.color)) {
      usedColors.push(item.color);
      new ColorBlock(item.color);
    }
  });
}

generateColorBlocks();

// Event delegation using jQuery on colorPanel
$('#colorPanel').on('click', 'div[data-color]', function() {
  const selectedColor = $(this).attr('data-color');

  // Highlight clicked button, remove shadow from others
  $('div[data-color]').css('box-shadow', 'none');
  $(this).css('box-shadow', '0 0 8px 4px rgba(0,0,0,0.6)');

  // Clear fruitDesc and display matching fruits
  $('#fruitDesc').empty();

  hannaFruits.forEach(function(item) {
    if (item.color === selectedColor) {
      const fruit = new Fruit(item.fruit, item.color, item.image, item.descr);
      $('#fruitDesc').append(fruit.render());
    }
  });
});
