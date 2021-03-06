import 'dart:math';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_windows/responsive/responsive.dart';
import 'package:flutter_windows/widget/animations/asset_image_size_tween.dart';

class HomePageAnimationWidget extends StatefulWidget {
  const HomePageAnimationWidget({Key? key}) : super(key: key);

  @override
  _HomePageAnimationWidgetState createState() =>
      _HomePageAnimationWidgetState();
}

class _HomePageAnimationWidgetState extends State<HomePageAnimationWidget>
    with SingleTickerProviderStateMixin {
  late Animation<double> _animation;
  late AnimationController _controller;

  @override
  void initState() {
    super.initState();
    _controller =
        AnimationController(duration: const Duration(seconds: 10), vsync: this);

    _animation = CurvedAnimation(parent: _controller, curve: Curves.easeIn);
    _controller.forward();
    _animation.addStatusListener(
      (AnimationStatus status) => {
        if (status == AnimationStatus.completed)
          {_controller.reverse()}
        else if (status == AnimationStatus.dismissed)
          {_controller.forward()}
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    final Size size = MediaQuery.of(context).size;
    final double minSize = min(size.width, size.height);
    return AssetImageSizeTween(
      animation: _animation,
      sizeTween: Tween<double>(
        begin: kIsWeb
            ? (minSize / 1.75)
            : Responsive.isMobile
                ? (minSize / 1.75)
                : minSize / 3,
        end: kIsWeb
            ? minSize / 2
            : Responsive.isMobile
                ? minSize / 2
                : minSize / 2.5,
      ),
      assetsPath: "assets/jpg/pexels.jpg",
    );
  }
}
