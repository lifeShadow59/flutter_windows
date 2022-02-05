import 'package:flutter/material.dart';
import 'package:flutter_windows/routes/routes_name.dart';
import 'package:flutter_windows/view/home_page/home_page.dart';

class Routes {
  static Route onGenerateRoute(RouteSettings settings) {
    // final Object? arguments = settings.arguments;

    Widget screen;
    switch (settings.name) {
      case RoutesName.homeRoute:
        screen = const HomePage();
        break;
      default:
        screen = const Scaffold();
        break;
    }
    return MaterialPageRoute(
      builder: (BuildContext context) => screen,
      settings: settings,
    );
  }

  static Map<String, WidgetBuilder> desktopRoutes() {
    return {
      "/": (_) => const HomePage(),
      "/${RoutesName.homeRoute}": (_) => const HomePage(),
    };
  }
}
