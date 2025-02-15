from .reload_addon import OBJECT_OT_reload_addon
from .rename_by_increasing import OBJECT_OT_rename_by_increasing
from ..libs.blender_utils import register_classes, unregister_classes

classes = (
  OBJECT_OT_reload_addon,
  OBJECT_OT_rename_by_increasing
)

def register():
  register_classes(classes)

def unregister():
  unregister_classes(classes)
