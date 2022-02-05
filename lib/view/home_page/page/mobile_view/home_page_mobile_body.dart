import 'package:flutter/material.dart';
import 'package:flutter_windows/view/home_page/home_view_widget/home_page_animation_widget.dart';

class HomePageMobileBody extends StatelessWidget {
  const HomePageMobileBody({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Center(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: const [
            Text(" mobile app app "),
            SizedBox(
              height: 10,
            ),
            HomePageAnimationWidget()
          ],
        ),
      ),
    );
  }
}
