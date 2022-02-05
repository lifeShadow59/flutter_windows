import 'dart:io';

class Responsive {
  static bool get isSoftware =>
      Platform.isWindows || Platform.isLinux || Platform.isMacOS;

  static bool get isMobile => Platform.isAndroid || Platform.isIOS;
}
