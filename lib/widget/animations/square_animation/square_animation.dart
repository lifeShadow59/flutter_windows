import 'package:flutter/material.dart';
import 'package:flutter_windows/models/square_model.dart';
import 'package:flutter_windows/widget/animations/square_animation/square_animation_functions.dart';

class SquareAnimation extends StatefulWidget {
  const SquareAnimation({Key? key, required this.tapUpDetails})
      : super(key: key);
  final TapUpDetails? tapUpDetails;
  @override
  _SquareAnimationState createState() => _SquareAnimationState();
}

class _SquareAnimationState extends SquareAnimationFunction {
  @override
  void initState() {
    setAnimationController();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    if (widget.tapUpDetails != null) {
      setNewLocation(widget.tapUpDetails!.localPosition);
    }

    return Stack(
      children: list
          .asMap()
          .entries
          .map(
            (e) => AnimatedBuilder(
              animation: animationController[e.key],
              builder: (contex, snapshot) {
                return CustomPaint(
                  painter: _Sqaures(
                    e.value,
                    animation[e.key].value,
                  ),
                );
              },
            ),
          )
          .toList(),
    );
  }
}

class _Sqaures extends CustomPainter {
  final Square squre;
  final Offset pointerLocation;
  _Sqaures(this.squre, this.pointerLocation);
  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(
        Rect.fromCenter(
            center: Offset(pointerLocation.dx, pointerLocation.dy),
            width: squre.squraeSize,
            height: squre.squraeSize),
        Paint()
          ..color = squre.squareColor
          ..style = PaintingStyle.stroke
          ..strokeWidth = 5);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => true;
}
