import 'package:flutter/material.dart';

class AssetImageSizeTween extends AnimatedWidget {
  const AssetImageSizeTween({
    Key? key,
    required Animation<double> animation,
    required this.sizeTween,
    required this.assetsPath,
  }) : super(key: key, listenable: animation);
  final Tween<double> sizeTween;
  final String assetsPath;
  @override
  Widget build(BuildContext context) {
    final Animation<double> animation = listenable as Animation<double>;
    return SizedBox(
      height: sizeTween.evaluate(animation),
      width: sizeTween.evaluate(animation),
      child: FittedBox(
        fit: BoxFit.fill,
        child: Image(
          image: AssetImage(assetsPath),
        ),
      ),
    );
  }
}
