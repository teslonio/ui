import Cattle from "ui/utils/cattle";

export default Cattle.CollectionController.extend({
  itemController: 'project',
  needs: ['authenticated'],
});
