import 'package:flutter/material.dart';
import 'package:flutter_windows/routes/routes.dart';
import 'package:flutter_windows/view/home_page/home_page.dart';

class MainWebFile extends StatelessWidget {
  const MainWebFile({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: "Flutter Windows sampel project",
      debugShowCheckedModeBanner: false,
      onGenerateRoute: Routes.onGenerateRoute,
      home: HomePage(),
    );
  }
}
