import 'package:fluent_ui/fluent_ui.dart';

class HomePageDesktopBody extends StatelessWidget {
  const HomePageDesktopBody({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: Text(" desktop app "),
    );
  }
}
