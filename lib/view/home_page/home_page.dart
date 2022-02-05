import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_windows/responsive/responsive.dart';
import 'package:flutter_windows/view/home_page/page/desktop_view/home_page_desktop_entry.dart';
import 'package:flutter_windows/view/home_page/page/mobile_view/home_page_mobile_entry.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    if (kIsWeb) {
      return const HomePageMobileEntry();
    } else if (Responsive.isMobile) {
      return const HomePageMobileEntry();
    } else {
      return const HomePageDesktopEntry();
    }
  }
}
