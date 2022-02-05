import 'dart:io';

class Responsive {
  static bool get isSoftware =>
      Platform.isWindows || Platform.isLinux || Platform.isMacOS;
}
