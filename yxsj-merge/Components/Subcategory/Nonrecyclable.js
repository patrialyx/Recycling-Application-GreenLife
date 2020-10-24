import SubcategoryInterface from './SubcategoryInterface.js'
class Nonrecyclable extends SubcategoryInterface {
  constructor(props){
    super(props);
    this.subcategory ='Non-recyclable';
    this.subcategoryImageURI = 'https://bloximages.chicago2.vip.townnews.com/newsbug.info/content/tncms/assets/v3/editorial/3/9e/39ee1109-f4e7-5787-9e87-86a75729b050/5b7ad06d75e53.image.png';
  }
}

export default Nonrecyclable;