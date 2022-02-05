import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter_windows/view/home_page/page/desktop_view/home_page_desktop_body.dart';

class HomePageDesktopEntry extends StatelessWidget {
  const HomePageDesktopEntry({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      constraints: const BoxConstraints(minHeight: 100, minWidth: 100),
      color: Colors.white,
      child: const HomePageDesktopBody(),
    );
  }
}
