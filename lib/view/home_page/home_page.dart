import 'dart:io';

import 'package:flutter/material.dart';
import 'package:flutter_windows/view/home_page/page/desktop_view/home_page_desktop_entry.dart';
import 'package:flutter_windows/view/home_page/page/mobile_view/home_page_mobile_entry.dart';

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Platform.isWindows
        ? const HomePageDesktopEntry()
        : const HomePageMobileEntry();
  }
}
