import 'package:flutter/material.dart';
import 'package:flutter_windows/models/square_model.dart';
import 'package:flutter_windows/widget/animations/square_animation/square_animation.dart';

abstract class SquareAnimationFunction extends State<SquareAnimation>
    with TickerProviderStateMixin {
  late List<AnimationController> animationController = [];
  late List<Animation> animation = [];
  var _currentLocation = const Offset(0, 0);
  late List<Square> list = [];

  void setNewLocation(Offset newlocation) async {
    for (var i = 0; i < animation.length; i++) {
      animation[i] = Tween<Offset>(begin: _currentLocation, end: newlocation)
          .animate(CurvedAnimation(
              parent: animationController[i], curve: Curves.easeInOut));
    }

    for (var i = 0; i < animationController.length; i++) {
      if (i == 0) {
        animationController[i].forward(from: 0.0);
      } else {
        await Future.delayed(Duration(milliseconds: list[i].delay.toInt() * 2));
        animationController[i].forward(from: 0.0);
      }
    }
    _currentLocation = newlocation;
  }

  void setAnimationController() {
    List.generate(
      15,
      (index) {
        animationController.add(AnimationController(
            vsync: this, duration: const Duration(milliseconds: 1000)));

        final color = Colors.accents[index];
        final delay = 10.0 * index;
        final size = 15.0 * index;

        animation.add(
            Tween<Offset>(begin: const Offset(0, 0), end: const Offset(0, 0))
                .animate(animationController[index]));

        list.add(Square(color, size, delay));
      },
    );
  }
}
