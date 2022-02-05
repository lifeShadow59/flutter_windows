import 'dart:io';

import 'package:desktop_window/desktop_window.dart';
import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_windows/main_web.dart';
import 'package:flutter_windows/main_windows.dart';
import 'package:flutter_windows/responsive/responsive.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  if (kIsWeb) {
  } else {
    if (Platform.isWindows) {
      DesktopWindow.setMinWindowSize(const Size(512, 384));
    }
  }
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    if (kIsWeb) {
      return const MainWebFile();
    } else if (Responsive.isMobile) {
      return const MainWebFile();
    } else {
      return const MainWindowsFile();
    }
  }
}
