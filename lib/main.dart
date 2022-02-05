import 'dart:io';
import 'package:desktop_window/desktop_window.dart';
import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter_windows/routes/routes.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  if (Platform.isWindows) {
    DesktopWindow.setMinWindowSize(const Size(512, 384));
  }
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return FluentApp(
      title: "Flutter Windows sampel project",
      debugShowCheckedModeBanner: false,
      initialRoute: '/',
      routes: Routes.desktopRoutes(),
    );
  }
}
