import 'package:flutter/material.dart';
import 'package:flutter_windows/view/home_page/page/mobile_view/home_page_mobile_body.dart';

class HomePageMobileEntry extends StatelessWidget {
  const HomePageMobileEntry({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const SafeArea(
      child: Scaffold(
        body: HomePageMobileBody(),
      ),
    );
  }
}
