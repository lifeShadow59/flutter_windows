import 'package:flutter/material.dart';

class HomePageMobileBody extends StatelessWidget {
  const HomePageMobileBody({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: Text(" mobile "),
    );
  }
}
