import 'package:flutter/material.dart';
import 'package:flutter_windows/view/home_page/home_view_widget/home_page_animation_widget.dart';
import 'package:flutter_windows/widget/animations/square_animation/square_animation.dart';

class HomePageMobileBody extends StatefulWidget {
  const HomePageMobileBody({Key? key}) : super(key: key);

  @override
  State<HomePageMobileBody> createState() => _HomePageMobileBodyState();
}

class _HomePageMobileBodyState extends State<HomePageMobileBody> {
  Offset? tapUpDetails;
  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        const SquareAnimation(),
        Center(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: const [
              SizedBox(
                height: 30,
              ),
              Text(
                " Mobile App ",
                style: TextStyle(
                  fontSize: 25,
                ),
              ),
              SizedBox(
                height: 15,
              ),
              HomePageAnimationWidget()
            ],
          ),
        ),
      ],
    );
  }
}
