import 'package:flutter/material.dart';
import 'package:flutter_windows/view/home_page/home_view_widget/home_page_animation_widget.dart';
import 'package:flutter_windows/widget/animations/square_animation/square_animation.dart';

class HomePageMobileBody extends StatefulWidget {
  const HomePageMobileBody({Key? key}) : super(key: key);

  @override
  State<HomePageMobileBody> createState() => _HomePageMobileBodyState();
}

class _HomePageMobileBodyState extends State<HomePageMobileBody> {
  TapUpDetails? tapUpDetails;
  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        SquareAnimation(tapUpDetails: tapUpDetails),
        ConstrainedBox(
          constraints: const BoxConstraints.expand(),
          child: GestureDetector(
            behavior: HitTestBehavior.opaque,
            onTapUp: (d) {
              tapUpDetails = d;
              setState(() {});
            },
          ),
        ),
        Center(
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
      ],
    );
  }
}
