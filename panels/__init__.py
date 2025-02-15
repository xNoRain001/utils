from .rename_by_increasing import VIEW3D_PT_utils
from .reload_addon import VIEW3D_PT_reload_addon
from ..libs.blender_utils import register_classes, unregister_classes

classes = (
  VIEW3D_PT_reload_addon,
  VIEW3D_PT_utils
)

def register():
  register_classes(classes)

def unregister():
  unregister_classes(classes)
