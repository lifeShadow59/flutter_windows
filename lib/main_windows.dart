import 'package:fluent_ui/fluent_ui.dart';
import 'package:flutter_windows/routes/routes.dart';
import 'package:flutter_windows/view/home_page/home_page.dart';

class MainWindowsFile extends StatelessWidget {
  const MainWindowsFile({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return const FluentApp(
      title: "Flutter Windows sampel project",
      debugShowCheckedModeBanner: false,
      home: HomePage(),
      onGenerateRoute: Routes.onGenerateRoute,
    );
  }
}
